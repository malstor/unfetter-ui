import { Injectable } from '@angular/core';
import { Subject, of as observableOf, Observable, empty as observableEmpty } from 'rxjs';
import { WorkerTypes } from '../../global/enums/web-workers.enum';
import { share, filter, take } from 'rxjs/operators';
import { WorkerClient } from '../../global/static/worker-client';

@Injectable()
export class WebWorkerService {
    public workerSubjects: { [index: string]: Subject<any> } = {};
    public componentId = 1;
    public jobId = 1;
    public workersSupported = typeof (Worker) !== 'undefined';

    constructor() { 
        if (this.workersSupported) {
            Object.values(WorkerTypes).forEach((workerType) => {
                console.log('Creating worker:', workerType);
                try {
                    const worker = new Worker(`/assets/${workerType}.js`);
                    const observerable = new Observable(subscriber => {
                        const handleMessage = response => subscriber.next(response.data);
                        worker.onmessage = handleMessage;
                        return () => worker.removeEventListener('message', handleMessage);
                    });

                    const observer = {
                        next: (messageData) => {
                            worker.postMessage(messageData);
                        }
                    };

                    this.workerSubjects[workerType] = Subject.create(observer, observerable).pipe(share());

                } catch (error) {
                    console.log('And error occured while attempting to create the worker');
                }                
            });
        } else {
            console.log('Web workers are not supported in this browser');
        }
    }

    
    /**
     * @param  {WorkerTypes} workerType
     * @returns WorkerClient
     * @description This needs to be called in every component that interfaces with web workers
     *  If the same component interacts
     */
    public generateClient<T = any, P = any>(workerType: WorkerTypes): WorkerClient {
        if (!this.workersSupported) {
            return;
        }
        return new WorkerClient<T, P>(this, workerType);
    }

    
    /**
     * @param  {WorkerTypes} workerType
     * @param  {string|number} component?
     * @returns Observable
     * @description This should *not* be called directly by components, use the `generateClient` function instead
     */
    public connect(workerType: WorkerTypes, component?: string | number): Observable<any> {
        if (!this.workersSupported) {
            return observableEmpty();
        }
        if (component !== undefined) {
            return this.workerSubjects[workerType].asObservable()
                .pipe(
                    filter((resp: any) => resp.component !== undefined && resp.component === component)
                );
        } else {
            return this.workerSubjects[workerType].asObservable();
        }
    }

    public submitJob(workerType, payload): Observable<any> {
        if (!this.workersSupported) {
            return observableEmpty();
        }
        const jobId = this.jobId++;
        this.workerSubjects[workerType].next({ jobId, payload });
        return this.workerSubjects[workerType].asObservable()
            .pipe(
                filter((resp: any) => resp.jobId !== undefined && resp.jobId === jobId),
                take(1)
            );
    }

    public sendMessage(workerType: WorkerTypes, payload, component?) {
        if (!this.workersSupported) {
            return;
        }
        this.workerSubjects[workerType].next({ component, payload });
    }
    
    public generateComponentId(): number {
        return this.componentId++;
    }
}

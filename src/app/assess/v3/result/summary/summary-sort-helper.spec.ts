import { AssessAttackPattern } from 'stix/assess/v2/assess-attack-pattern';
import { AssessKillChainType } from 'stix/assess/v2/assess-kill-chain-type';
import { Phase } from 'stix/assess/v2/phase';
import { SummarySortHelper } from './summary-sort-helper';

describe('SummarySortHelper', () => {
  it('should create an instance', () => {
    expect(new SummarySortHelper()).toBeTruthy();
  });

  it('should sort killchain risk objects by risk decending', () => {
    let riskObjects: AssessKillChainType[] = [];
    let expected: AssessKillChainType[] = [];
    riskObjects.sort(SummarySortHelper.sortByRiskDesc());
    expect(JSON.stringify(riskObjects)).toEqual(JSON.stringify(expected));

    riskObjects = [{ risk: null, questions: null, objects: null, phaseName: null }];
    expected = [{ risk: null, questions: null, objects: null, phaseName: null }];
    riskObjects.sort(SummarySortHelper.sortByRiskDesc());
    expect(JSON.stringify(riskObjects)).toEqual(JSON.stringify(expected));

    riskObjects = [{ risk: 1, questions: null, objects: null, phaseName: null }, { risk: .5, questions: null, objects: null, phaseName: null }];
    expected = [{ risk: 1, questions: null, objects: null, phaseName: null }, { risk: .5, questions: null, objects: null, phaseName: null }];
    riskObjects.sort(SummarySortHelper.sortByRiskDesc());
    expect(JSON.stringify(riskObjects)).toEqual(JSON.stringify(expected));

    riskObjects = [{ risk: null, questions: null, objects: null, phaseName: null }, { risk: 0, questions: null, objects: null, phaseName: null }];
    expected = [{ risk: 0, questions: null, objects: null, phaseName: null }, { risk: null, questions: null, objects: null, phaseName: null }];
    riskObjects.sort(SummarySortHelper.sortByRiskDesc());
    expect(JSON.stringify(riskObjects)).toEqual(JSON.stringify(expected));

    riskObjects = [{ risk: .5, questions: null, objects: null, phaseName: null }, { risk: 1, questions: null, objects: null, phaseName: null }];
    expected = [{ risk: 1, questions: null, objects: null, phaseName: null }, { risk: .5, questions: null, objects: null, phaseName: null }];
    riskObjects.sort(SummarySortHelper.sortByRiskDesc());
    expect(JSON.stringify(riskObjects)).toEqual(JSON.stringify(expected));

    riskObjects = [{ risk: null, questions: null, objects: null, phaseName: null }, { risk: 1, questions: null, objects: null, phaseName: null }];
    expected = [{ risk: 1, questions: null, objects: null, phaseName: null }, { risk: null, questions: null, objects: null, phaseName: null }];
    riskObjects.sort(SummarySortHelper.sortByRiskDesc());
    expect(JSON.stringify(riskObjects)).toEqual(JSON.stringify(expected));

    riskObjects = [{ risk: null, questions: null, objects: null, phaseName: null },
    { risk: .5, questions: null, objects: null, phaseName: null },
    { risk: .5, questions: null, objects: null, phaseName: null },
    { risk: 1, questions: null, objects: null, phaseName: null },
    { risk: null, questions: null, objects: null, phaseName: null },
    { risk: 1, questions: null, objects: null, phaseName: null }];
    expected = [{ risk: 1, questions: null, objects: null, phaseName: null },
    { risk: 1, questions: null, objects: null, phaseName: null },
    { risk: .5, questions: null, objects: null, phaseName: null },
    { risk: .5, questions: null, objects: null, phaseName: null },
    { risk: null, questions: null, objects: null, phaseName: null },
    { risk: null, questions: null, objects: null, phaseName: null }];
    riskObjects.sort(SummarySortHelper.sortByRiskDesc());
    expect(JSON.stringify(riskObjects)).toEqual(JSON.stringify(expected));
  });

  it('should sort phases by average risk decending', () => {
    let phases: Phase[] = [];
    let expected: Phase[] = [];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }];
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: undefined }];
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: undefined }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 0 }];
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 0 }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 }];
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }];
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }];
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }, { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }];
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));

    phases = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 },
    { assessedObjects: null, attackPatterns: null, _id: null },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 }];
    // Note that null and missing avgRisk ordering is arbitrary, but that doesn't matter as long as they all end up at the end
    expected = [{ assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: 1 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: .5 },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null },
    { assessedObjects: null, attackPatterns: null, _id: null },
    { assessedObjects: null, attackPatterns: null, _id: null, avgRisk: null }];
    phases.sort(SummarySortHelper.sortByAvgRiskDesc());
    expect(JSON.stringify(phases)).toEqual(JSON.stringify(expected));
  });

  it('should sort attack patterns by sophistication level ascending', () => {
    let patterns: AssessAttackPattern[] = []
    let expected: AssessAttackPattern[] = [];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: undefined }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: undefined }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 0 }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 0 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 0 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 0 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 2 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 2 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 2 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 2 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));

    // Note that null and missing sophistication_level ordering is arbitrary, but that doesn't matter as long as they all end up at the end
    patterns = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 2 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 }];
    expected = [{ description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 1 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: 2 },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null },
    { description: null, external_references: null, id: null, kill_chain_phases: null, name: null, x_unfetter_sophistication_level: null }];
    patterns.sort(SummarySortHelper.sortBySophisticationAsc());
    expect(JSON.stringify(patterns)).toEqual(JSON.stringify(expected));
  });


});

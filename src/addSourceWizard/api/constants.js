export const COST_MANAGEMENT_API_BASE = '/api/cost-management/v1';
export const SOURCES_API_BASE_V3 = '/api/sources/v3.1';

export const COST_MANAGEMENT_APP_NAME = '/insights/platform/cost-management';
export const CLOUD_METER_APP_NAME = '/insights/platform/cloud-meter';
export const CATALOG_APP = '/insights/platform/catalog';

export const timeoutedApps = (appTypes) => [
  appTypes.find(({ name }) => name === CLOUD_METER_APP_NAME)?.id,
  appTypes.find(({ name }) => name === COST_MANAGEMENT_APP_NAME)?.id,
];

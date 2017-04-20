export const REQUEST_CLUSTERS = 'REQUEST_CLUSTERS';
function requestClusters() {
  return {
    type: REQUEST_CLUSTERS
  };
}

export const RECEIVE_CLUSTERS = 'RECEIVE_CLUSTERS';
function receiveClusters(clusters) {
  return {
    type: RECEIVE_CLUSTERS,
    clusters
  };
}

export const SELECT_CLUSTER = 'SELECT_CLUSTER';
export const SELECT_NODE = 'SELECT_NODE';
export const SELECT_NAMESPACE = 'SELECT_NAMESPACE';
export const clusterEntitySelected = (entity) => {
  return {
    // TODO type, cluster, node, namespace based on entity
    type: SELECT_NODE,
    node: entity,
  };
};

export const SELECT_ENTITY_VIEW = 'SELECT_ENTITY_VIEW';
export const entityViewSelected = (entity, view) => {
  return {
    type: SELECT_ENTITY_VIEW,
    entity: entity,
    view: view
  };
}

export function fetchClusters() {
  const dummyData = [{
    id: 'Cluster ONE',
    label: 'Cluster ONE',
    children: [{
      id: 'Cluster ONE',
      label: 'Cluster ONE',
      children: []
    }, {
      id: 'Cluster TWO',
      label: 'Cluster TWO',
      children: []
    }]
  }, {
    id: 'Cluster TWO',
    label: 'Cluster TWO',
    children: []
  }];

  return function(dispatch) {
    dispatch(requestClusters());

    setTimeout(() => {
      dispatch(receiveClusters(dummyData));
    }, 200);
  }
}



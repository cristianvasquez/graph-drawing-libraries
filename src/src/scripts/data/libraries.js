/**
 * Offline data should be auto generated at release step. This will let users
 * without github accounts user the website as well. We should also let them know
 * time when the data was generated.
 * 
 * TODO: should this be part of gh-graph-stats heroku app?
 */
module.exports = {
  generated: 1404587171695, // epoch time when data was generated
  libraries: {
    'almende/vis': {
      license: 'Apache 2.0'
    },
    'anvaka/ngraph': {
      license: 'MIT'
    },
    'anvaka/VivaGraphJS': {
      license: 'BSD 3'
    },
    'cpettitt/dagre': {
      license: 'MIT'
    },
    'cytoscape/cytoscape.js': {
      license: 'LGPL'
    },
    'dhotson/springy': {
      license: 'MIT'
    },
    'fkling/JSNetworkX': {
      license: 'BSD 3'
    },
    'GraphAlchemist/Alchemy': {
      license: 'AGPLv3'
    },
    'jacomyal/sigma.js': {
      license: 'MIT'
    },
    'mbostock/d3': {
      license: 'BSD 3'
    },
    'samizdatco/arbor': {
      license: 'MIT'
    },
    'strathausen/dracula': {
      license: 'MIT'
    }
  }
};

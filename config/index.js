module.exports = {
  services: {
    http: {
      port: 9201
    }
  },
  service: {
    name: 'DECENTRALIZE',
    authority: 'decentralize.fm',
    proto: 'https',
    namespace: 'decentralize',
    mission: 'the podcast',
    description: 'The best place for learning about what\'s going on with the latest decentralized tech.',
    source: 'https://github.com/martindale/decentralize',
    points: []
  },
  source: {
    sockets: 'wss://',
    proto: 'https',
    host: 'decentral.fm',
    port: '443'
  },
  soundcloud: {
    clientID: '98ce66124fabdff2f33beb2f810a0a25',
    slug: 'decentralize-podcast'
  }
}

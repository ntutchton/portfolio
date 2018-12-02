export default [
  {
    tags: ['backend', 'frontend', 'application' ],
    labels: [ 'REACT', 'REDUX', 'PSQL', 'PYTHON'],
    imageUrl: 'images/carbos.png',
    name: 'Carbos',
    description: 'Carbos leverages the Ethereum blockchain to increase access and accountability in carbon trading markets.',
    links: [
      {
        to: 'https://github.com/carbos-workshop',
        type: 'github',
        text: 'view code'
      },
      {
        to: 'http://carbos.co/',
        type: 'site',
        text: 'visit site',
        inactive: true,
      },
    ]
  },
  {
    tags: ['frontend', 'backend', 'website'],
    labels: ['REACT', 'AWS', 'MATERIAL', 'SKETCH', ],
    imageUrl: 'images/nathan.tutchton.rocks.png',
    name: 'This Site',
    description: 'My personal site. Configured for auto-magical builds, deployments, and static hosting from an S3 bucket.',
    links: [
      {
        to: 'https://github.com/ntutchton/nathan.tutchton.rocks',
        type: 'github',
        text: 'view code'
      },
    ]
  },
  {
    tags: [ 'application', 'frontend'],
    labels: [ 'ANGULAR', 'NODE', 'MONGO', 'DOCKER', ],
    imageUrl: 'images/SServ.png',
    name: 'GEOINT Self Service',
    description: 'A tool to provision and permission DevOps resources across NGA (National Geospacial Administration) and NGA contractor networks.',
    links: [
      {
        to: 'https://gitlab.devops.geointservices.io/SelfService2/selfservice2',
        type: 'gitlab',
        text: 'view code',
        warning: 'You will need NGA login credentials to view this content.',
      },
      {
        to: 'https://my.gs.mil/login',
        type: 'site',
        text: 'visit site',
        warning: 'You will need NGA login credentials to view this content.',
      },
    ]
  },
  {
    tags: ['design'],
    labels: ['PHOTOSHOP', 'ILLUSTRATOR', ],
    imageUrl: '',
    name: 'Scapegoat',
    description: 'A digital recreation of one of my drawings.',
    links: [
      {
        to: '#',
        type: 'dribbble',
        text: 'see it',
      },
    ]
  },
  {
    tags: ['backend'],
    labels: ['PYTHON', ],
    imageUrl: 'images/OSRS.png',
    name: 'Mr Clicky',
    description: 'A simple click-bot for "Old School" Runescape.',
    links: [
      {
        to: 'https://github.com/ntutchton/mr-clicky',
        type: 'github',
        text: 'view code'
      },
    ]
  },
]

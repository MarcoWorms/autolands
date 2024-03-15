module.exports = {
  openaiKey: '',
  worldbuilding: `This world is a replica of the LOTR world, right when the first movie starts, these characters are in the same world but don't actually meet the movie characters.`,
  date: new Date('1003-08-02'), // starting daate
  players: [ 
    { 
      name: 'Zsdar',
      class: 'warrior',
      bornAt: new Date('950-04-05'),
      trainingSince: new Date('955-04-05'),
    },
    [
      {
        name: 'Cion',
        class: 'mage',
        bornAt: new Date('900-04-05'),
        trainingSince: new Date('907-04-05'),
      },
      {
        name: 'Xur',
        class: 'mage',
        bornAt: new Date('900-04-05'),
        trainingSince: new Date('907-04-05'),
        description: 'Cion apprentice',
      },
    ]
  ]
}
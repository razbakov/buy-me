import createEasyFirestore from 'vuex-easy-firestore';

export default createEasyFirestore({
  firestorePath: 'ingredients',
  firestoreRefType: 'collection',
  moduleName: 'ingredients',
  statePropName: 'collection',
}, {logging: true});

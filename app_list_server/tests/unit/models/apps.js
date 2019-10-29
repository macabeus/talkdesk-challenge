const test = require('ava')
const { filterApps } = require('../../../src/models/apps')

test('Models Apps - filterApps', (t) => {
  const appAmazingVideo = {
    name: 'amazing video',
    categories: ['a', 'b'],
  }

  const appAmazingVoice = {
    name: 'amazing voice',
    categories: ['x'],
  }

  const appPhotos = {
    name: 'photos',
    categories: ['a'],
  }

  const mockAppsList = [
    appAmazingVideo,
    appAmazingVoice,
    appPhotos,
  ]

  const filterByName = filterApps(mockAppsList, { name: 'amazing' })
  const filterByCategory = filterApps(mockAppsList, { category: 'a' })
  const filterByNameAndCategory = filterApps(mockAppsList, { name: 'amazing', category: 'a' })

  t.deepEqual(filterByName, [appAmazingVideo, appAmazingVoice])
  t.deepEqual(filterByCategory, [appAmazingVideo, appPhotos])
  t.deepEqual(filterByNameAndCategory, [appAmazingVideo])
})

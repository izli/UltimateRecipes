import * as User from './User'

describe('User', () => {
  test('CRUD', async () => {
    const userId = await User.insert({
      name: 'Manny Calavera'
    })

    const user = await User.find(userId)
    expect(user!.id).not.toBeUndefined()
    expect(user!.name).toEqual('Manny Calavera')
  })
})

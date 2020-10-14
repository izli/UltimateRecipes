import * as Unit from './Unit'

describe('Unit', () => {
  test('CRUD', async () => {
    const unitID = await Unit.insert({
      unit_name: 'gramma',
      abbreviation: 'g'
    })

    const unit = await Unit.find(unitID)
    console.log(unit)
    expect(unit!.id).not.toBeUndefined()
    expect(unit!.unit_name).toEqual('gramma')
  })
})

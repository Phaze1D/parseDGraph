import { graphql } from 'graphql'
import { Schema } from './data/schema'
import * as mock from './data/mock'



beforeAll(() => {
  // mock.createGraph()
})


describe('Testing Queries with Directives', () => {

  test('DGraphFuncDirective', async () => {
    let query = `
    {
      movie @filter(func: {
        filter1:{
          uid: { uids: ["someuid"]}
        }
      }){
        starring {
          name
        }
        genres {
          genre
        }
      }
    }
    `
    const result = await graphql(Schema,query)
    expect(result.data).toMatchObject({})
  })


  xtest('DGraphCascadeDirective', async () => {
    fail()
  })


  xtest('DGraphIgnorereFlexDirective', async () => {
    fail()
  })


  xtest('DGraphNormalizeDirective', async () => {
    fail()
  })


  xtest('DGraphVarDefDirective', async () => {
    fail()
  })
})
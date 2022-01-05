import CallListComponent from './src/components/calllist.js'
import { ROUTE_NAMES as NAMES, ADMIN_GROUP } from './src/consts.js'
import { CALL_FORM_CONFIG } from './src/formconfig.js'

export function createMenu (user) {
  return user.groups.indexOf(ADMIN_GROUP) >= 0
    ? { label: 'paro', to: { name: NAMES.calllist } }
    : null
}

export async function setupRoutes (routes, path, cfg, initConfig) {
  const callsCfg = Object.assign(cfg, { 
    conf: CALL_FORM_CONFIG,
    default_sort: 'created:asc',
    // getLoadUrl: (itemId, self) => {
    //   const filter = { 
    //     slug: self.query._detail 
    //   }
    //   return `${self.cfg.url}?filter=${JSON.stringify(filter)}`
    // },
  })
  await initConfig(groupsCfg)

  routes.push({
    path, 
    name: NAMES.calllist, 
    component: CallListComponent, 
    props: route => {
      return { query: route.query, cfg: callsCfg }
    }
  })

  // const optionsCfg = Object.assign({}, cfg, { 
  //   conf: OPTION_FORM_CONFIG,
  //   apiurl: cfg.url,
  //   default_sort: 'value:asc',
  //   getLoadUrl: (itemId, self) => {
  //     const filter = { 
  //       value: self.query._detail 
  //     }
  //     return `${self.cfg.url}/${self.$route.params.id}?filter=${JSON.stringify(filter)}`
  //   },
  //   getListUrl: (self) => {
  //     return `${self.cfg.url}/${self.$route.params.id}`
  //   },
  //   getSaveUrl: (currItem, self) => {
  //     const u = `${self.cfg.url}/${self.$route.params.id}`
  //     return currItem ? `${u}/${self.query._detail}` : u
  //   }
  // })
  // await initConfig(optionsCfg)

  // routes.push({ 
  //   path: `${path}:id`, 
  //   name: NAMES.optionlist, 
  //   component: OptionListComponent, 
  //   props: route => {
  //     return { query: route.query, id: route.params.id, cfg: optionsCfg }
  //   }
  // })
}

// export const List = GroupListComponent
// export const Detail = OptionListComponent
// export const ROUTE_NAMES = NAMES
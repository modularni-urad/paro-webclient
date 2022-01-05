import Actions from './actions.js'

export default {
  props: ['query', 'cfg'],
  components: { Actions },
  template: `
  <ACListView :query="query" :cfg="cfg">
    <template v-slot:tbody="{ items, fields }">

      <tr v-for="row,rowidx in items" :key="rowidx">
        <td>{{ row.name }}</td>
        <td>{{ row.submission_start | date }}</td>
        <td>{{ row.submission_end | date }}</td>
        <td>{{ row.thinking_start | date }}</td>
        <td>{{ row.voting_start | date }}</td>
        <td>{{ row.voting_end | date }}</td>
        <td>{{ row.minimum_support }}</td>
        <td>{{ row.budgetlimit }}</td>
        <td>{{ row.status }}</td>
        <Actions key="actions" :query="query" :row="row" :cfg="cfg" />
      </tr>

    </template>
  </ACListView>
  `
}

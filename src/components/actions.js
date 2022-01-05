import { ROUTE_NAMES, ADMIN_GROUP } from '../consts.js'

export default {
  props: ['query', 'cfg', 'row'],
  computed: {
    muzuUpravit: function () {
      return this.$store.getters.isMember(ADMIN_GROUP)
    }
  },
  methods: {
    doEdit: function () {
      const query = Object.assign({}, this.query, { _detail: this.row.id })
      this.$router.replace({ query })
    },
    nextPhase: function (i) {
      const url = `${this.cfg.url}${i.id}/start`
      this.$store.dispatch('send', { method: 'put', url })
        .catch(err => this.$store.dispatch('onerror', err))
    }
  },
  template: `
  <td>
    <b-button-group>
      <b-button v-if="muzuUpravit" size="sm" variant="primary" @click="doEdit(row)">
        <i class="fas fa-edit"></i> upravit
      </b-button>
      <b-button v-if="muzuUpravit" size="sm" variant="secondary" @click="nextPhase(row)">
        <i class="fas fa-edit"></i> další fáze
      </b-button>
    </b-button-group>
  </td>
  `
}

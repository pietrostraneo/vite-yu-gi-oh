import { reactive } from "vue";

export const store = reactive({
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    archPoint: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cards: [],
    archetypes: [],
    app_title: 'Yu-Gi-Oh Deck',
    loading: true,
    search: '',
    type: ''
});
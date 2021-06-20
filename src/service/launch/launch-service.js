import ApiService from "../api";

class LaunchService extends ApiService {
    
    constructor() {
        super('/launchs')
    }

    
    getMonths() {
        return [
            { label: 'Janeiro', code: 1 },
            { label: 'Fevereiro', code: 2 },
            { label: 'Março', code: 3 },
            { label: 'Abril', code: 4 },
            { label: 'Maio', code: 5 },
            { label: 'Junho', code: 6 },
            { label: 'Julho', code: 7 },
            { label: 'Agosto', code: 8 },
            { label: 'Setembro', code: 9 },
            { label: 'Outubro', code: 10 },
            { label: 'Novembro', code: 11 },
            { label: 'Dezembro', code: 12 }
        ]
    }

    getTypes() {
        return [
            { label: 'Receita', code: 'RECEITA' },
            { label: 'Despesa', code: 'DESPESA' }
        ]
    }
}

export default LaunchService
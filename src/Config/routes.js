/**
 * Rotas da aplicação
 */
export const ROTAS = {
    'INICIAR_SISTEMA': '/',
    'DASHBOARD_GERENTE': '/dashboard-gerente',
    'LOGIN_VENDEDOR': '/login-vendedor',
    'VENDA': '/venda',
    API: {
        gerente: {
            autenticar: ''
        },
        vendedor: {
            autenticar: ''
        },
        cliente: {
            verificarCpf: 'cliente/identificar?cpf='
        },
        produto: {
            disponibilidade: 'estoque/consulta/',
            consultarPorId: 'produto/get_one/'
        },
        venda: {
            cadastrar: 'venda/registrar/'
        }
    }
};
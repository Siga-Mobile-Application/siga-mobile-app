export interface GradeProps {
    disciplina: string
    sigla: string
    mediaFinal: string
    faltas: string
    frequencia: string
    datas: DataProps[]
}

export interface DataProps {
    titulo: string
    data_prevista: string
    avaliacoes: AvaliacaoProps[]
}

export interface AvaliacaoProps {
    nota_parcial: string
    data_lancamento: string
}

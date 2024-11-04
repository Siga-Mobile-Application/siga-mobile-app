export interface DisciplineProps {
    sigla: string
    disciplina: string
    turma: string
    professor: string
    dia: string
    presenca: string
    ausencia: string
    horario: string[]
    aula: ClassProps[]
    avaliacoes?: AssessmentProps[]
}

export interface AssessmentProps {
    avaliacao: string
    data: string
    nota: string
}

export interface ClassProps {
    data: string
    aula: string
    presenca: string
    ausencia: string
}
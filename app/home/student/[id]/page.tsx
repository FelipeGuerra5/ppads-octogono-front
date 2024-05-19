type Props = {
    params: {
        id: string
    }
}

export default function Students({ params }: Props) {
    return (
        <h1>
            Pagina do Aluno: {params.id}
        </h1>
    )
}
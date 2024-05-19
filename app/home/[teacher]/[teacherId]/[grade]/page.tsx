import Styles from '@/app/home/[teacher]/[teacherId]/[grade]/page.module.css'
import Link from 'next/link'

export default async function first({ params }: {
    params: {
        teacher: string,
        teacherId: string,
        grade: number
    }
}) {

    return (
        <main className={Styles.container}>
            <header className={Styles.header} >
                <h1>
                    Bem-vindo à sala do {params.grade}º Ano
                </h1>
            </header>
            <section className={Styles.options} >
                <Link
                    className={Styles.option}
                    href={`./${params.grade}/takeAttendance`}
                >
                    <p className={Styles.action} >
                        Fazer Chamada
                    </p>
                </Link>
                <Link
                    className={Styles.option}
                    href={`./${params.grade}/listStudents`}
                >
                    Listar Alunos
                </Link>
                <Link
                    className={Styles.option}
                    href={`./${params.grade}/statictics`}
                >
                    <p>
                        Ver Estatística
                    </p>
                </Link>
            </section>
        </main>
    )


}
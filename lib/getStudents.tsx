type Props = {
    params: {
        period: string,
        schoolGrade: number
    }
}

export default async function getStudents({ params }: Props) {
    const res = await fetch('/api/students', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const students = await res.json()
    return students
}
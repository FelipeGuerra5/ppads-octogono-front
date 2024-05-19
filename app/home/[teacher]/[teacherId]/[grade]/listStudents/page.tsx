import RenderClassList from '@/app/components/RenderClassList'
import Styles from '@/app/home/[teacher]/[teacherId]/[grade]/listStudents/page.module.css'
import { useEffect, useState } from 'react'
import studentsClass from "@/data/students.json"
import getStudents from '@/lib/getStudents'


export default async function ListStudents() {

  const params = { period: "afternoon", schoolGrade: 6 }
  const students: Students = await getStudents({ params });

  const page = (
    <main className={Styles.main}>
      <section className={Styles.attendanceInfo}>
        <div className={Styles.information}>Matéria: {students.classMeta}</div>
        <div className={Styles.information}>Período: {students.period}</div>
        <div className={Styles.information}>Prof: {students.teacher == 1 ? "Fernanda" : null}</div>
      </section>
      <div className={Styles.studentsListContainer}>
        <RenderClassList params={students} />
      </div>
    </main>
  )

  return page
}



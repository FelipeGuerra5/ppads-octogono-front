'use client'

import { useState } from "react"
import studentsClass from "@/data/students.json"
import Styles from '@/app/home/[teacher]/[teacherId]/[grade]/listStudents/page.module.css'
import Link from "next/link"

type Props = {
  params: Students
}

export default function RenderClassList({ params }: Props) {
  const students = params
  return (
    <>
      <section className={Styles.studentsList}>
        {
          students.studentsList.map((student, id) => (
            <div key={student.name} className={Styles.selectStudentActive}>
              <Link
                href={`/home/student/${id}`}
                key={id}
                className={Styles.studentLink}
              >{student.name}
              </Link>
            </div>
          ))
        }
      </section>
    </>
  )
}



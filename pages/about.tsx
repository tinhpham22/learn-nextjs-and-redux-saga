import React from 'react';

interface Props {
  personals: { id: number, name: string }[]
}

export const getStaticProps = async () => {
  // call api
  const data = [{
    id: 3,
    name: 'Nguyen van a'
  }]
  return {
    props: { personals: data }
  }
}

function AboutPage(props: Props) {
  const { personals } = props

  return (
    <>
      Hello About Page!
      <p>
        {personals.map((personal) => (
          <div key={personal.id}>
            {personal.name}
          </div>
        ))}
      </p>
    </>
  )
}

export default AboutPage;
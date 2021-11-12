import Link from 'next/link'

import { ProduceResModel } from "../../models/produce/produce-res.model";
import styles from '../../styles/Home.module.css'

interface Props {
  produces: ProduceResModel[],
}

export const getStaticProps = () => {
  const produces: ProduceResModel[] = [
    { id: '1', name: 'tivi', expiry: '2020' },
    { id: '2', name: 'radio', expiry: '2020' }
  ]
  return {
    props: {
      produces
    }
  }
}

const ProducesPage = (props: Props) => {
  const { produces } = props;
  return (
    <>
      {
        produces.map((produce) => (
          <Link href={'/produces/' + produce.id } passHref key={produce.id}>
            <div key={produce.id} className={styles.card}>
              {produce.name}
            </div>
          </Link>

        ))
      }
    </>
  )
}

export default ProducesPage;
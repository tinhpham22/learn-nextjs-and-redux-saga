import { ProduceResModel } from "../../models/produce/produce-res.model";
import styles from '../../styles/Home.module.css'

// export const getStaticPaths = () => {
//   const produces: ProduceResModel[] = [
//     { id: '1', name: 'television', expiry: '2020' },
//     { id: '2', name: 'radio', expiry: '2020' }
//   ]

//   const paths = produces.map(p => ({
//     params: { id: p.id.toString() },
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = ({ params }: any) => {
//   // call api produce details
//   const produce = {
//     id: params.id,
//     name: `Sản phẩm ${params.id}`,
//     expiry: 'no'
//   }

//   return {
//     props: {
//       produce
//     }
//   }
// }

interface Props {
  produce: ProduceResModel
}

function ProduceDetail(props: Props) {
  const { produce } = props;
  return (
    <div className={styles.card}>
      hihihi
      {/* {produce.id} - {produce.name} - {produce.expiry} */}
    </div>
  )
}

export default ProduceDetail;
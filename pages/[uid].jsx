const UserIdPage = (props) => {
  return <h1>{props.id}</h1>;
};

export default UserIdPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const userID = params.uid;
  return {
    props: {
      id: 'userID-' + userID,
    },
  };
};
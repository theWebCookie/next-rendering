const UserProfilePage = (props) => {
  const { userName } = props;
  return <h1>{userName}</h1>;
};

export default UserProfilePage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      userName: 'User',
    },
  };
};

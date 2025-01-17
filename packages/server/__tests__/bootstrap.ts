import dbInit from '../src/database/init';
(async function () {
  console.log('++++++ Bootstraping Tests +++++++');
  await dbInit();

  // beforeEach(async () => {
  //   await User.create({
  //     email: 'johndoe@example.com',
  //     password: 'hashedpassword',
  //     role: 'USER',
  //   });
  // });
})();

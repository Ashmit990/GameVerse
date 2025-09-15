
export function initStorage() {
  const usersData = localStorage.getItem('gameverseUsers');

  if (!usersData) {
    const gameverseUsers = {
      users: [
        {
          id: 1,
          name: "Ashmit",
          email: "ashmit@example.com",
          password: "hashed_password",
          cart: [
            {
              gameID: 101,
              gameName: "GTA 5",
              gameImg: "img/src",
              price: 500
            }
          ],
          bills: [
            {
              billId: 1,
              items: [
                {
                  gameID: 101,
                  gameName: "GTA 5",
                  price: 500
                }
              ],
              total: 1000,
              date: "2025-09-10"
            }
          ]
        },
        {
          id: 2,
          name: "Riya",
          email: "riya@example.com",
          password: "hashed_password",
          cart: [],
          bills: []
        }
      ],
      currentUserId: null 
    };

    localStorage.setItem('gameverseUsers', JSON.stringify(gameverseUsers));
  }
}


export function findUserByCredentials (email,password){

}

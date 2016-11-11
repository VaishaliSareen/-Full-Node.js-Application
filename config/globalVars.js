/**
 * Created by MaC on 2016-10-07.
 */

// object hloding global variable
module.exports = {
   //db: 'mongodb://localhost/comp2068-fri',

   db: 'mongodb://<dbuser>:<dbpassword>@ds145997.mlab.com:45997/web_programming',
   secret: 'Some random string used to salt 123',
   ids: {
      facebook: {
         clientID: '1631221613844676',
         clientSecret: 'f8e0fe37362132e0fe481b5bef28a916',
         callbackURL :'http://localhost:3000/facebook/callback'
      },
      github: {
         clientID: '0576d949addefa3ed3f7',
         clientSecret: 'bb26795256c7bbab79445bac19e0fbc37c6a4f6d',
         callbackURL :'http://localhost:3000/github/callback'
      }
   }
};
import PortCard from './PortCard'

export default function Backend() {
  const data = [
    {
      name: 'Movie Rating App',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, CSS, ContextAPI, express, MongoDB',
      desc:
        'In this you can make list movies by searching it and and can give personal rating to that movie and add to database',
      github: 'https://github.com/saad2786/movie_rating_app ',
      visit: '',
    },
    {
      name: 'Social Media Web App',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, SASS, ContextAPI, express, MongoDB',
      desc:
        'Features  like create new account, login, create posts, make freinds, follow and unfollow, like and comment the posts',
      github: 'https://github.com/saad2786',
      visit: '',
    },
    {
      name: 'E-commerce Website',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, SASS, Strapi, Stripe, express, MySql',
      desc:
        'There are Features like Search products, add to cart, add to wishlist, manage content using Strapi, payment gateway',
      github: 'https://github.com/saad2786/eCommerce',
      visit: 'https://ecommerce-sp-store.netlify.app',
    },
    {
      name: 'ToDo List Web App',
      videoUrl: '',
      type: 'individual',
      tech: 'EJS, js, CSS, mongoDB, Node.js',
      desc:
        'In this we can make list for multiple purposes like for work, exercise etc',
      github: 'https://github.com/saad2786',
      visit: '',
    },
    {
      name: 'Invoice Wep App',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, SASS, REST, MongoDB, Node.JS',
      desc:
        'In this app we can make records of customer and diplay it app which have bought how many items and total amount of it',
      github: 'https://github.com/saad2786',
      visit: '',
    },
  ]
  return (
    <>
      {data.map((item, index) => {
        return (
          <PortCard
            key={index}
            name={item.name}
            videoUrl={item.videoUrl}
            type={item.type}
            github={item.github}
            tech={item.tech}
            visit={item.visit}
            desc={item.desc}
          />
        )
      })}
    </>
  )
}

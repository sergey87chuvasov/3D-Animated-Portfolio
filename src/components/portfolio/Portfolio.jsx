import './Portfolio.css';

const items = [
  {
    id: 1,
    img: '/p1.jpg',
    title: 'Full Stack Blog Application',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.',
    link: '/',
  },
  {
    id: 2,
    img: '/p2.jpg',
    title: 'School Management System',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.',
    link: '/',
  },
  {
    id: 3,
    img: '/p3.jpg',
    title: 'Real-time Chat Application',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.',
    link: '/',
  },
  {
    id: 4,
    img: '/p4.jpg',
    title: 'Social Media Project',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.',
    link: '/',
  },
  {
    id: 5,
    img: '/p5.jpg',
    title: 'Animated Portfolio Website',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.',
    link: '/',
  },
];

const ListItem = ({ item }) => {
  return (
    <div className='pItem'>
      <div className='pImg'>
        <img src={item.img} alt='img pic' />
      </div>
      <div className='pText'>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>
        <a href={item.link}>
          <button>View Project</button>
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='pList'>
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </div>
      <section />
      <section />
      <section />
      <section />
    </div>
  );
};

export default Portfolio;

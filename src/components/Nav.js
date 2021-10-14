import {Link} from 'react-router-dom';

function Nav(props){
    let lis = [];
    for(var i = 0; i < props.src.length; i++){
        var item = props.src[i];
        lis.push(
          <li key={item.id}>          
              <Link to={'/read/'+item.id} data-id={item.id}>
                {item.title}
              </Link>
          </li>
        );
    }
    return (
      <nav>
        <ol>
          {lis}
        </ol>
      </nav>
    );
  }
  
  export default Nav;
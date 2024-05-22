import React from 'react'
import './CSS/Dashboard.css';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div>
        <div className="dashboard-river">
  <div className="dashboard-container">
    <div className="dashboard">
      <div className="ui-row-1">
        <div className="logo-comp">
        <div>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 297 297"
              xmlSpace="preserve"
            >
              <g>
                <path d="M48.523,73.196h18.131c5.597,0,10.137-4.536,10.137-10.134c0-5.6-4.54-10.137-10.137-10.137H48.523 c-5.599,0-10.137,4.537-10.137,10.137C38.387,68.66,42.925,73.196,48.523,73.196z" />
                <path d="M47.628,123.657c0-5.598-4.54-10.137-10.137-10.137H19.357c-5.599,0-10.135,4.539-10.135,10.137 c0,5.597,4.536,10.135,10.135,10.135h18.134C43.088,133.792,47.628,129.254,47.628,123.657z" />
                <path d="M277.643,95.387h-18.135c-5.597,0-10.137,4.539-10.137,10.135c0,5.601,4.54,10.137,10.137,10.137h18.135 c5.599,0,10.135-4.536,10.135-10.137C287.777,99.926,283.241,95.387,277.643,95.387z" />
                <path d="M140.148,203.69v83.173c0,5.598,4.54,10.137,10.137,10.137c5.599,0,10.137-4.539,10.137-10.137V203.69h93.406 c5.597,0,10.137-4.539,10.137-10.136c0-5.598-4.54-10.137-10.137-10.137H227.05c3.911-8.197,5.898-17.617,5.898-28.209 c0-29.299-21.058-60.583-39.637-88.187c-5.055-7.506-9.829-14.599-13.809-21.124c-1.689-3.791-1.094-19.677,1.284-34.106 c0.487-2.938-0.344-5.942-2.271-8.212c-1.926-2.27-4.752-3.58-7.73-3.58h-40.998c-2.977,0-5.803,1.313-7.729,3.58 c-1.924,2.268-2.755,5.271-2.273,8.21c2.383,14.432,2.978,30.316,1.288,34.107c-3.984,6.527-8.759,13.619-13.813,21.126 c-18.579,27.604-39.639,58.887-39.639,88.186c0,10.592,1.987,20.012,5.902,28.209H46.745c-5.601,0-10.137,4.539-10.137,10.137 c0,5.597,4.536,10.136,10.137,10.136H140.148z M202.707,183.418H97.864c-6.701-7.003-9.968-16.27-9.968-28.209 c0-23.111,19.222-51.669,36.182-76.865c5.209-7.738,10.13-15.05,14.363-21.993c4.769-7.819,4.27-23.774,2.954-36.077h17.781 c-1.316,12.302-1.813,28.257,2.952,36.077c4.233,6.943,9.153,14.252,14.362,21.992c16.96,25.197,36.184,53.755,36.184,76.866 C212.675,167.148,209.406,176.417,202.707,183.418z" />
              </g>
            </svg>
          </div>
          <p>ADOPTY</p>
        </div>
       
      
        <div className="profile-small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-gear-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </div>
      </div>
      <div className="ui-row-2">
        <div className="left-sidebar">
          
          
          
         
          <div>
          <Link style={{textDecoration:'none', color:'white'}} to="/admin/user">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="currentColor"
              className="bi bi-people-fill"
              viewBox="0 0 16 16">
              
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
              />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg> </Link>
           
          </div>
        
        </div>
        <div className="main-content">
          <div className="header">
            <div  className="clay-category">
        
            <Link style={{textDecoration:'none'}} to="/admin/adoptRequestDog">  <p style={{color:'white'}}> Adoption requests for dogs</p> </Link>
            </div>
            <div className="clay-category">
          
            <Link style={{textDecoration:'none'}}  to="/admin/adoptRequestCat">   <p style={{color:'white'}}> Adoption requests for cats</p> </Link>
            
            </div>
            
          </div>
         
          <hr />
          <div className="featured-clay">
            <div>
              <div />
              <div>
              <Link to="/admin/cat">
                <h3> Manage the list of cats </h3>
                
                </Link>
              </div>
              
            </div>
            
            <div>
              <div />
              <div>
                   
              <Link to="/admin/dog"> 
                <h3>Manage the list of dogs </h3>
                
              </Link>
              </div>
            </div>
            <div>
              <div />
              <div>
              <Link to="/admin/veterinarian"> 
                <h3> Manage the list of veterinarians </h3>
                </Link>
               
              </div>
            </div>
          </div>
          <hr />
          <div className="featured-users">
            <h2>
              Featured
              <br />
              <span>Claymakers</span>
            </h2>
            <div>
              <div>
                <div />
                <div>
                  <h3>Narjes hammouda</h3>
                  <div>
                    
                  </div>
                </div>

              </div>
              
            </div>
      
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard
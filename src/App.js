import './App.css';
import MessengerCustomerChat from "react-messenger-customer-chat"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        <h6>Ahmed Ashraf's Test Page</h6>
        <div>      
            <MessengerCustomerChat
              pageId="1210758752321211"
              appId="232520608490022"
              />

        </div>    
        <div class="fb-customerchat"
                page_id="1210758752321211">
        </div>   

  
    
      </header>
    </div>
  );
}

export default App;

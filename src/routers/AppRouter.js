import { JournalScreen } from "../components/journal/JournalScreen"
import { AuthRouter } from "./AuthRouter"

JournalScreen
export const AppRouter = () => {
  return (
    <div>

        <Router>
            <Switch>
                <Route path="/auth" exact component={AuthRouter} ></Route>
                <Route path="/" exact component={JournalScreen} ></Route>
            </Switch>
        </Router>

        
    </div>
  )
}

import React, {useEffect} from "react";
import "../styles/webworker.css";
import { ordinal_suffix } from "../util/helpers";
import { reducer } from '../state/reducer'
import { Results } from "../components/results";

import Footer from '../components/footer';

// https://www.smashingmagazine.com/2020/10/tasks-react-app-web-workers/#web-workers-in-react


const DOCUMENT_TITLE = 'Web Worker Page';

export default function WebWorkerPage() {
    const [info, dispatch] = React.useReducer(reducer, {
        err: "",
        num: "",
        computedFibs: [],
      });

      useEffect(() => {
        document.title = DOCUMENT_TITLE;
      }, []);

      const runWorker = (num, id) => {
        dispatch({ type: "SET_ERROR", err: "" });
        const worker = new Worker(new URL('../workers/fib-worker.js', import.meta.url));

        worker.postMessage({ num, id });
        worker.onerror = (err) => err;
        worker.onmessage = (e) => {
          const { time, fibNum } = e.data;
          dispatch({
            type: "UPDATE_FIBO",
            id,
            time,
            fibNum,
          });
          worker.terminate();
        };
      };

    return (
        <div>
            {/* <h1>Web Worker Page</h1> */}
            <div className='content-container'>
                <div className="heading-container">
                    <h1>Web Worker Example: </h1>
                    <h2>Computing the nth Fibonnaci number</h2>
                </div>
                <div className="body-container">
                    <p id="error" className="error">
                    {info.err}
                    </p>

                    <div className="input-div">
                        <input
                            type="number"
                            value={info.num}
                            className="number-input"
                            placeholder="Enter a number"
                            onChange={(e) =>
                                dispatch({
                                    type: "SET_NUMBER",
                                    num: window.Number(e.target.value),
                                })
                            }
                        />
                        <button
                            id="submit-btn"
                            className="btn-submit"
                            onClick={() => {
                                if (info.num < 2) {
                                    dispatch({
                                        type: "SET_ERROR",
                                        err: "Please enter a number greater than 2",
                                    });
                                    return;
                                }
                                const id = info.computedFibs.length;
                                dispatch({
                                    type: "SET_FIBO",
                                    id,
                                    loading: true,
                                    nth: ordinal_suffix(info.num),
                                });
                                runWorker(info.num, id);
                            }}
                        >
                            Calculate
                        </button>
                        <button
                            id="submit-btn"
                            className="btn-submit"
                            onClick={() => {                                
                                dispatch({
                                    type: "CLEAR_HISTORY",                                    
                                });                                
                            }}
                            style={{backgroundColor: 'firebrick'}}
                        >
                            Clear
                        </button>
                        </div>

                    <Results results={info.computedFibs} />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
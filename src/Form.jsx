import { useState } from "react";
import convert from "./utilities/utils";
const Form = () => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    from: "gmd",
    to: "usd",
  });
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "amount") {
      setInputValues({
        ...inputValues,
        amount: e.target.value,
      });
    } else if (e.target.id === "from") {
      setInputValues({
        ...inputValues,
        from: e.target.value,
      });
    } else {
      setInputValues({
        ...inputValues,
        to: e.target.value,
      });
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "convert") {
      //convert
      let conversion = convert(
        inputValues.amount,
        inputValues.from,
        inputValues.to
      );

      setResult(conversion);
    } else {
      setInputValues({
        amount: "",
        from: "gmd",
        to: "usd",
      });
      setResult(0);
    }
  };
  return (
    <form>
      <div className="groups">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={inputValues.amount}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From this currency</label>
          <select
            name="from"
            id="from"
            value={inputValues.from}
            onChange={handleChange}
          >
            <option value="usd">USD DOLLAR</option>
            <option value="gmd">GMD GAMBIA DALASI</option>
            <option value="gbp">GBP BRITISH POUND</option>
            <option value="aud">AUD DOLLAR</option>
            <option value="cfa">CFA - FRANC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to">To this currency</label>
          <select
            name="to"
            id="to"
            value={inputValues.to}
            onChange={handleChange}
          >
            <option value="usd">USD DOLLAR</option>
            <option value="gmd">GMD GAMBIA DALASI</option>
            <option value="gbp">GBP BRITISH POUND</option>
            <option value="aud">AUD DOLLAR</option>
            <option value="cfa">CFA - FRANC</option>
          </select>
        </div>
      </div>
      <center>
        <p>
          Result: <span className="result">{result.toFixed(2)}</span>
        </p>

        <button id="convert" onClick={handleClick}>
          Convert
        </button>
        <button id="clear" onClick={handleClick}>
          Clear
        </button>
      </center>
    </form>
  );
};

export default Form;

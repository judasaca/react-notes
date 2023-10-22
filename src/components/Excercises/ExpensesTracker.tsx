import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const categories = ["GROCERIES", "UTILITIES", "ENTERTAINMENT"] as const;
const schema = z.object({
  description: z.string().min(3),
  category: z.enum(categories),
  amount: z.number().min(0),
});
type FormData = z.infer<typeof schema>;

const ExpensesTracker = () => {
  const [expenses, setExpenses] = useState<FormData[]>([]);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //   console.log(FormData["category"]);
  const onSubmit = (data: FormData) => {
    console.log(data);
    setExpenses([...expenses, data]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <div className="text-danger">{errors.description.message} </div>
        )}
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <div className="text-danger">{errors.amount.message} </div>
        )}
        <label htmlFor="category" className="form-label">
          Category
        </label>
        {Object.values(FormData).map((v) => (
          <div>{v}</div>
        ))}
        <select
          {...register("category")}
          className="form-select mb-3"
          defaultValue={""}
        >
          <option value={""}></option>

          {categories.map((c, i) => (
            <option value={c} key={i}>
              {c.toLowerCase()}
            </option>
          ))}
        </select>
        {errors.category && (
          <div className="text-danger">{errors.category.message}</div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {expenses.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody key={"sadw"}>
            {expenses.map((e, index) => {
              return (
                <tr key={index + "table"}>
                  <td key={index + "description"}>{e.description}</td>
                  <td key={index + "amount"}>{e.amount}</td>
                  <td key={index + "categories"}>{e.category}</td>
                  <td key={index + "button"}>Elimintar</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpensesTracker;

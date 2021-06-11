import axios from "axios";
import { useQueryClient, useMutation, QueryKey } from "react-query";
import {
  TransactionHistory,
  Transaction,
  MovementRequest,
  PaymentRequest,
} from "./Transaction";

export async function getHistory(
  username: string
): Promise<TransactionHistory> {
  let res = await axios.get("/history", {
    params: { username: username },
  });
  return res.data;
}

export async function postDeposit(req: MovementRequest) {
  const res: Transaction = await axios.post("/deposit", req);
  return res;
}

export function useDeposit(queryKey: QueryKey) {
  const queryClient = useQueryClient();
  return useMutation((req: MovementRequest) => postDeposit(req), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
}

export async function postWithdraw(req: MovementRequest) {
  const res: Transaction = await axios.post("/withdraw", req);
  return res;
}

export function useWithdraw(queryKey: QueryKey) {
  const queryClient = useQueryClient();
  return useMutation((req: MovementRequest) => postWithdraw(req), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
}

export async function postPayment(req: MovementRequest) {
  const res: Transaction = await axios.post("/payment", req);
  return res;
}

export function usePayment(queryKey: QueryKey) {
  const queryClient = useQueryClient();
  return useMutation((req: PaymentRequest) => postPayment(req), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
}

import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import { env } from "@/env";
import { toast } from "@/hooks/use-toast";

const SUCCESS_CODES = [200, 201, 204];

const alovaInstance = createAlova({
  requestAdapter: adapterFetch(),
  baseURL: env.NEXT_PUBLIC_CHATROOM_API_URL,
  responded: {
    onError: (err) => {
      toast({
        title: "Error",
        description: err.message,
      });
    },
    onSuccess: async (response) => {
      if (response.status > 400) {
        toast({
          title: "Error",
          description: response.statusText,
        });
        throw new Error(response.statusText);
      }
      const json = await response.json();
      if (!SUCCESS_CODES.includes(json.statusCode)) {
        // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
        toast({
          title: "Error",
          description: json.message,
        });
        throw new Error(json.message);
      }
    },
  },
});

export default alovaInstance;

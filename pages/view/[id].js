import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";
/*
  dynamic router지원
  대괄호로 넣어 js파일을 생성하면 view/id값
  으로 라우팅 할 수 있다.
*/
const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    const [item, setItem] = useState({});

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    function getData() {
        Axios.get(API_URL).then((res) => {
            setItem(res.data);
        });
    }

    useEffect(() => {
        if (id && id > 0) {
            getData();
        }
    }, [id]);

    return <Item item={item} />;
};

export default Post;

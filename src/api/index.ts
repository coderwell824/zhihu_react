import http from '@/utils/request';

// 获取今日新闻信息 & 轮播图信息
const queryNewsLatest = () => http.get('/api/news_latest');

// 获取往日新闻信息
const queryNewsBefore = (time: any) =>
  http.get('/api/news_before', {
  params: {
    time,
  },
});

// 获取新闻详细信息
const queryNewsInfo = (id: any) =>
  http.get('/api/news_info', {
  params: {
    id,
  },
});

// 获取新闻点赞信息
const queryStoryExtra = (id: any) =>
  http.get('/api/story_extra', {
  params: {
    id,
  },
});

// 发送验证码
const sendPhoneCode = (phone: any) =>
  http.post('/api/phone_code', {
  phone,
});

// 登录/注册
const login = (phone: any, code: any) =>
  http.post('/api/login', {
  phone,
  code,
});

// 获取登录者信息
const queryUserInfo = () => http.get('/api/user_info');

// 收藏新闻
const store = (newsId: any) => http.post('/api/store', { newsId });

// 移除收藏
const storeRemove = (id: any) =>
  http.get('/api/store_remove', {
  params: {
    id,
  },
});

// 获取收藏列表
const storeList = () => http.get('/api/store_list');

// 图片上传「要求FormData格式」
const upload = (file: any) => {
  const fm = new FormData();
  fm.append('file', file);
  return http.post('/api/upload', fm);
};

// 修改个人信息
const userUpdate = (username: any, pic: any) =>
  http.post('/api/user_update', {
  username,
  pic,
});

/* 暴露API */
const api = {
  queryNewsLatest,
  queryNewsBefore,
  queryNewsInfo,
  queryStoryExtra,
  sendPhoneCode,
  login,
  queryUserInfo,
  store,
  storeRemove,
  storeList,
  upload,
  userUpdate,
};
export default api;

import { AnyAction } from "redux";

// <AC extends () => AnyAction> 泛型约束
// ReturnType<AC>['type']为将要传入的函数的type的类型，其中['type']为键名，ReturnType的作用是用于获取函数AC(要传入的函数)的返回类型。
// match(action: AnyAction)为要传入的函数要调用的match方法(此match方法为我们自己定义的)
// match(action: AnyAction):action is ReturnType<AC>  match中传入的action首先被定义为AnyAction,让action的类型收窄为要传入的函数的返回值的类型
// 总的来说要实现传入的函数中携带的type要是自己的type类型，action是自己的action类型
type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>;
}
// 使用函数重载定义无payload和有payload的两种情况
// <AC extends () => AnyAction & { type: string }> 泛型约束
// (...args: any[]) => AnyAction  ...args表示可以传入很多种args,把这些args都放到一个array中。
// Function为generic function
// actionCreator()被invoked之后变成了action对象
// Object.assign(target,source)的作用是把source中改变的值传入target对象中
// function withMatcher return一个object，object中包含match函数，match函数返回值是一个Boolean
export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;
export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;
export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type === type;
        }
    })
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload };
}

import {Injectable} from '@angular/core';
import {CONST} from './const';
import * as mu from 'mzmu';

@Injectable()
export class GLOBAL {
    httpStatus: number = 0;

    httpError: any = {};

    /**
     * 设置当前登录用户信息
     * @param current
     */
    setCurrent(current: any): void {
        // this.isAdmin = !current.agencyId;
        // this.current = current;

        //noinspection TypeScriptUnresolvedFunction
        mu.storage(CONST.CURRENT, current);
    }

    /**
     * 清楚用户登录信息
     */
    clearCurrent(): void {
        // this.isAdmin = null;
        // this.current = null;
        mu.storage(CONST.HEADER_TOKEN, '');
        mu.storage(CONST.CURRENT, '');
    }
}

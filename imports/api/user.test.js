import expect from 'expect';
import {Meteor} from 'meteor/meteor';

import {validateNewUser} from "./users";
//to change it to only run on server side
if(Meteor.isServer){
    describe('users',function(){
//create two test cases, a pass and a fail
        //if email is correct
        it('should allow valid email address',function () {
            const testUser = {
                emails: [
                    {
                        address:'Test@example.com'
                    }
                ]
            };
            const res = validateNewUser(testUser);

            expect(res).toBe(true);
        });
        //if email is wrong
        it('should reject invalid email',function () {
            const testUser = {
                emails: [
                    {
                        address:'Testexample.com'
                    }
                ]
            };
            expect(()=>{
                validateNewUser(testUser);
            }).toThrow();
        })
    });
}




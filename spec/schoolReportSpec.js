describe('SCHOOL REPORT', function(){
    it('should return 1 from string Red', function(){
        let string = 'Red'
        let result = resultCounter(string)
        expect(result).toEqual("Red:1 Green:0 Amber: 0")
    })
    it('should return 1 from string Green', function(){
        let string = 'Green'
        let result = resultCounter(string)
        expect(result).toEqual("Red:0 Green:1 Amber: 0")
    })
    it('should return 1 from string Amber', function(){
        let string = 'Amber'
        let result = resultCounter(string)
        expect(result).toEqual("Red:0 Green:0 Amber: 1")
    })
    it('should return 2 from string Red, Red', function(){
        let string = 'Red,Red'
        let result = resultCounter(string)
        expect(result).toEqual("Red:2 Green:0 Amber: 0")
    })
    it('should return 2 from string Green, Green', function(){
        let string = 'Green,Green'
        let result = resultCounter(string)
        expect(result).toEqual("Red:0 Green:2 Amber: 0")
    })
    it('should return 1 from string Green, Red', function(){
        let string = 'Green,Red'
        let result =  resultCounter(string)
        expect(result).toEqual("Red:1 Green:1 Amber: 0")
    })
})
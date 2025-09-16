Project Title: "Personal Decision Making App - Step 1: UI Setup, Basic Input Handling & Modular Output"
## Description:
     So for my specific app I decided to make instead of something that calculates, I personally wanted to create a log of "Save vs Spend". This is my app name and I believe it to be very helpful since it lets me log the data that I put in and write notes that go with whether you spent x amount or saved x amount. Which I eventually want to make it where it can log all of your data of either how much you save vs spend and where did said amount go to,, what your needs are, or possibly what financial habits you might want to change depending on the users goal of either saving or spending.
## My Decision Focus
    This app is designed to be more of a log to keep track of the amount I want to save or spend for however x amount is. It helps me get a visual with notes, and maybe hopefully a list displayed of how much im saving or spending by including some visual factors that will help me make a choice of to save or to spend:

    1. **Amount used**: Shows me how much I've spent or saved.
    2. **Note for amount spent**: This is the input that helps me log what im saving or spending on.
    3. **What type of decision**: to decide if I'm saving or spending
## Decision Logic

### Helper Functions
- **calculateDecisionPoints(decisionType, decisionAmount)**  
  - When `decisionType` is `"save"`, then it returns the positive `decisionAmount`.  
  - When `decisionType` is `"spend"`, then it returns the negative of `decisionAmount`.  
  - When the input is missing or invalid, then it returns `0`.

- **calculateDecisionSummary(decisionType, decisionAmount)**  
  - When `decisionType` is `"save"`, then it returns `"Saved $X"`.  
  - When `decisionType` is `"spend"`, then it returns `"Spent $X"`.  
  - When the input is invalid, then it returns `"No decision recorded"`.

### Main Function
- **calculateDecision(data)**  
  This function brings everything together. It takes in the form inputs:
  - `decisionType` (save/spend)  
  - `decisionAmount` (numeric value)  
  - `decisionNote` (text log)  
  - `decisionReason` (essential, nonessential, longterm, shortterm)  
  - `entryId` (hidden field)

  It then:  
  1. Calculates points (positive for save, negative for spend).  
  2. Generates a summary string (`"Saved $X"` or `"Spent $Y"`).  
  3. Returns an object with all the values needed for display: amount, note, type, reason, summary, and timestamp.

### Example Outputs
Here are three different runs to show the logic at work:

**Example 1**  
Inputs: Amount = 45, Note = "groceries", Type = "spend", Reason = "essential"  
Output:  
- Current Decision: *Spent $45.00*  
- Breakdown:  
  - Amount: $45.00  
  - Note: groceries  
  - Type: spend  
  - Reason: essential  

**Example 2**  
Inputs: Amount = 150, Note = "Roth IRA", Type = "save", Reason = "longterm"  
Output:  
- Current Decision: *Saved $150.00*  
- Breakdown:  
  - Amount: $150.00  
  - Note: Roth IRA  
  - Type: save  
  - Reason: longterm  

**Example 3**  
Inputs: Amount = 120, Note = "concert tickets", Type = "spend", Reason = "nonessential"  
Output:  
- Current Decision: *Spent $120.00*  
- Breakdown:  
  - Amount: $120.00  
  - Note: concert tickets  
  - Type: spend  
  - Reason: nonessential  
## Input Types Used

The application uses the following form inputs to gather the neccesary infoormation to log:

1.**Number Input** for **decisionAmount**: I decided to go with a number input here since the amount of saved vs spent. This will log the numerical of the amount used for whichever decision I decide on.
2.**Text Input** for **decisionNote**: It makes sense to label what I'm saving x amount or spending x amount on whatever the case may be. It will help keep track of the things I'm using my money on and whether its saving that amount or spending that amount.
3.**Radio Buttons** for **decisionType**: This is the most basic Save or Spend you choose which of the two options I will end up logging.
4.**Drop-Down Menu (Select Box)** for **decisionReason**: This provides a predefined list of reasons for the decision, such as *essential*, *nonessential*, *long-term savings*, or *short-term savings*. By using a drop-down, it ensures consistency in how reasons are logged and helps organize entries into categories that can be compared or analyzed later.

## Color Pallete:
>My personal pallete scheme that has things to do with money and colors that balance each other out with some tan, various shades of green, and some subtle tonal colors.
>*Main background: #CAD2C5
>*Form background: #ffffff
>*Text Color: #52796F
>*Button/Accent Color: #52796F

https://coolors.co/palette/cad2c5-84a98c-52796f-354f52-2f3e46

https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
**Final Project Proposal**

  

**Basic Info:**

  

Project Name: Factors Affecting Obesity Worldwide

Team name: Visual Seekers

Team Members:

	Aditi Maheshwari, aditimaheshwari93@gmail.com

	Jarom Wilcox, wiljar00@gmail.com

	Pratyusha Sai Kamarouthu, kpratyushasai@gmail.com

Github Repository: [https://github.com/wiljar00/VisualSeekers](https://github.com/wiljar00/VisualSeekers)

  


**Background and Motivation:**

  

Obesity is currently a rising threat to the world population. There could be many different factors contributing to the rise of obesity and we would like to take a further look into the causes and effects of this epidemic. Obesity is apparent in many places throughout the world, so we are creating a visualization to better view the data collected throughout the world’s many countries and possibly identify trends. This visualization will provide insights into the factors that affect obesity and could help identify possible solutions. There are different lifestyle choices and diet compositions that could potentially aid in battling obesity and we feel that this will be an effective tool to identify solutions. Finding possible solutions to this worldwide epidemic would make this world a better place, which is our main motivation for this visualization.

  

**Project Objectives:**

  

There are several questions that we are attempting to answer with this visualization. The primary questions we are looking to answer are as follows:

  

What diet related factors affect obesity?

Where in the country is obesity the most severe and why?

How do certain countries’ diets affect obesity rates?

What is the relationship between certain foods and obesity?

Are there any factors that reduce obesity in the world?

  

We would like to learn of the correlations between the attributes we have selected and obesity rates. Hopefully, we will be able to identify trends between certain foods or lifestyles and obesity. Identifying these relationships will help us in our personal lives and also help others identify issues in their own lives. We would like to find factors that clearly affect obesity rates.

  

The benefits of this study are numerous. As previously mentioned, obesity is a rising threat that is negatively affecting the world’s population. It is affecting different parts of the world at different rates and the visualization we are creating would help identify why this is happening. Identifying causes of obesity would help battle the epidemic. Finding factors that prevent obesity would be a great benefit to the world. These are a few of the benefits we would like to find by creating this visualization.

  

**Data:**

  

The dataset we will be using is a combination of datasets collected from the worldwide database of ourworldindata.org. We will use the previously collected data to create our own visualizations of the relationships between these datasets.

  

The datasets we will use are as follows:

Worldwide database:

[https://ourworldindata.org/](https://ourworldindata.org/happiness-and-life-satisfaction)

Obesity:

[https://ourworldindata.org/obesity](https://ourworldindata.org/obesity)

Fruit and Vegetable consumption:

[https://ourworldindata.org/diet-compositions](https://ourworldindata.org/diet-compositions)

  

Meat and seafood consumption: [https://ourworldindata.org/meat-and-seafood-production-consumption](https://ourworldindata.org/meat-and-seafood-production-consumption)

  

Overall fat consumption:

[https://ourworldindata.org/diet-compositions](https://ourworldindata.org/diet-compositions)

  

Average Body Mass Index:

[https://ourworldindata.org/hunger-and-undernourishment](https://ourworldindata.org/hunger-and-undernourishment)

  

Life Expectancy:

[https://ourworldindata.org/life-expectancy](https://ourworldindata.org/life-expectancy)

  
  

**Data Processing:**

  

We plan on doing substantial data cleanup in creating this visualization. Our data is provided through CSV files, but we will need to combine different datasets to create our relationship graphs. We will remove unwanted data and attributes from these CSV files and combine others. There will be missing data from certain countries throughout this combined dataset and we will need to clean up these missing values. We will remove unwanted years and dates from these datasets as well.

  

The attributes we will use to create our visualization are: obesity, fruit and vegetable consumption, meat and seafood consumption, overall fat consumption, average body mass index, and life expectancy. To process our data, we will be manually combining these CSV files and using them together to enable access as needed throughout use of this visualization.

  
  

**Visualization Design:**

  

To display our data, we will begin by showing a map of the world at the top of the visualization. This map will be used as a selector for certain datasets. Functionality will be added to each country of which we have sufficient data. When the user clicks on a country, the dataset will be loaded.

  

After the country is selected on the world map, there will be several line graphs on the left side if the page. These line graphs will show the data of individual attributes over the total years. This will enable us to show potential trends or changes of each attribute over time. There will be a graph for each individual attribute in our database. Using the hover feature, we will be able to view exact values on these line graphs. This is for the user to get a baseline reading of the information before looking at any comparison.

  

The next part of the display will have a comparison box with selectable attributes. It will be larger than the individual attribute graphs and will have additional functionality. The user will be able to select which countries (using the map) and multiple attributes (using a drop-down menu or tabs) to view how these attributes relate throughout different countries. This will be either a scatterplot or an area chart. If possible, both graph options will be available. This section of the visualization will be the most interactive section and will provide the most insights.

  

There will be additional features as well. When hovering over each country, there will be additional information shown in a hover or slider menu. This will be displayed according to the data available in our datasets. There will also be baseline identifiers on the line graphs to show the same relative time between graphs. More attributes may be possibly be added if deemed necessary. The extensible portion of this visualization creation is the number of attributes. Overall, we should be able to identify trends and relationships between attributes using the main graphs and also view other country information if desired.

  
  

**Must-Have Features:**

There are several essential features of this visualization. We must have a map for selecting the desired countries to compare. There must be functionality to select these countries and load their datasets. We must have the single attribute line graphs showing the trends of each attribute throughout the years. We also must have some form of comparison visualization or graph completed. This is where the user will be able to easily identify trends between attributes. These features must be completed to be considered a complete project.

  

**Optional Features:**

  

After the essential features are completed, there are many optional features that could be added. The slider/hover menu showing information of each country selected is a non-essential option. Additional comparison graphs implemented throughout different tabs would be an optional feature. A scatterplot of attribute data by selected countries may be added to show additional information. Multiple selection options may be implemented for selecting countries and attributes for the comparison maps. Additional functionality to the comparison graph could be added using different selectors and formats. Transitions may be added to help view the change in datasets and provide context for new data.

  

**Project Schedule:**

  

*Week 1:*

  

*Goals:*

Our main goal is to have the structure built and HTML set up with appropriate “div” ids for separation of group work. Also we must have a workable dataset completed by the end of this week.

  

*Tasks:*

Jarom will help in setting up the HTML page with appropriate “div” sections and their IDs to help enable the separation of future tasks.

  

Aditi will work on the design of the main HTML page and set up the appropriate CSS elements.

  

Pratyusha will work on collecting and cleaning up the datasets. She will get at least one CSV file ready to be used in the visualization.

  

As team members finish their tasks, they will spend any additional time helping create a workable dataset for the visualization.

  

*Week 2:*

  

*Goals:*

Our goals for this week will be to finish the functionality of selecting countries from the world map and create the single attribute charts. Also we will be finishing the prototype for presentation.

  

*Tasks:*

Jarom will work on finishing the map selection functionality and work on prototype requirements.

  

Aditi will work on creating several single attribute charts.

  

Pratyusha will work on creating the remaining single attribute charts.

  

*Additional tasks:*

Finish prototype and make ready the visualization for presentation.

  

*Week 3:*

  

*Goals:*

Our goals for this week will be to add a comparison chart to the bottom of the visualization and add styling options to the created graphs.

  

*Tasks:*

  

Jarom will work on styling issues including a map color scale and slider/hover menu.

  

Aditi will work on creating the comparison chart and CSS styling various areas of the visualization.

  

Pratyusha will aid in the creation of the comparison chart and create a table to show the currently selected countries.

  

*Week 4:*

  

*Goals:*

Our goals for this week will be to finalize the Must-Have features of the visualization, add additional optional features, and create styling to better represent our data and findings.

  

*Tasks:*

Jarom will work on additional styling, review all uncompleted features from the must-have list, and add additional features from the optional list if time.

  

Aditi will work on making smooth transitions between datasets and additional styling.

  

Pratyusha will work on adding features from our optional feature list and help ensure the correct implementation of each feature.